// import { NextResponse } from "next/server";

// // export async function GET(
// //   request: Request,
// //   { params }: { params: { name: string } }
// // ) {
// //   const { name } = params;
// //   console.log("Fetching country:", name);

// //   // try {
// //   //   const res = await fetch(`https://www.apicountries.com/name/${name}`);

// //   //   if (!res.ok) {
// //   //     return NextResponse.json(
// //   //       { error: `Country "${name}" not found` },
// //   //       { status: res.status }
// //   //     );
// //   //   }

// //   //   const data = await res.json();
// //   //   return NextResponse.json(data);
// //   // } catch (error) {
// //   //   console.error("Error fetching country:", error);
// //   //   return NextResponse.json(
// //   //     { error: "Failed to fetch country" },
// //   //     { status: 500 }
// //   //   );
// //   // }
// // }

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ region: string }> }
) {
  const params = await context.params; // await here!
  const region = params.region;

  console.log("Params:", region);
  try {
    const res = await fetch(`https://www.apicountries.com/region/${region}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Country "${region}" not found` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching country:", error);
    return NextResponse.json(
      { error: "Failed to fetch country" },
      { status: 500 }
    );
  }
}

// //
