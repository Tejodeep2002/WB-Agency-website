// app/api/revalidate/route.ts
/*
The relatively simple API route that handles the incoming request from a GROQ-Powered Webhook. 	

The webhook here could have the following settings:
      	  filter: `_type in ["testimonial", "page"]`
        projection: `{_type}`
        trigger on: [x] create [x] update [x] delete
*/

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export const POST = async (req: NextRequest) => {
  const { isValidSignature, body } = await parseBody(
    req,
    process.env.SANITY_REVALIDATE_SECRET
  );

  console.log(isValidSignature, body)

  try {
    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // If the `_type` is `testimonial`, then all `client.fetch` calls with
    // `{next: {tags: ['testimonial']}}` will be revalidated
    revalidateTag(body._type);
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
};
