// backend/app/api/dashboard/route.js
import { NextResponse } from "next/server";
import { verifyToken } from "../../../verifyToken";
import { db } from "../../../firebase-admin";

export async function GET(request) {
  //make sure the token received is valid
  const user = await verifyToken(request);
  if (!user) {
    const response = NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
    //solving the CORS problem
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return response;
  }

  const email = user.email;
  //save the location of the document
  const userRef = db.collection("users").doc(user.uid);
  //get the document in that location
  const userSnap = await userRef.get();

  //if there is no document create one in that location
  if (!userSnap.exists) {
    await userRef.set({
      email: email,
      role: "user", //the default role if i want a user to be an admin i will change it form firebase console
    });
  }

  const { role } = userSnap.exists ? userSnap.data() : { role: "user" };

  // Dummy role-based data
  const response = NextResponse.json(
    role === "admin"
      ? { dashboard: "Admin data here", role }
      : { dashboard: "User data here", role }
  );
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}
