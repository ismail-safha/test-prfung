// pages/api/logUser.js

import axios from "axios";
import prisma from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userAgent = req.headers["user-agent"];
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  let location = { city: "Unknown", region: "Unknown", country: "Unknown" };

  try {
    // Fetch location data from ipregistry.co API
    const apiKey = process.env.IPREGISTRY_API_KEY;
    const geoResponse = await axios.get(
      `https://api.ipregistry.co/${ip}?key=${apiKey}`
    );
    const geoData = geoResponse.data.location;

    location = {
      city: geoData.city,
      region: geoData.region.name,
      country: geoData.country.name,
    };

    const log = await prisma.userLog.create({
      data: {
        ip,
        city: location.city,
        region: location.region,
        country: location.country,
        userAgent,
      },
    });
    res.status(200).json(log);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
