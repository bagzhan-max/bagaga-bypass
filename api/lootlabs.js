export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "GET only"
    });
  }

  const { click_id, ip, unique_id } = req.query || {};

  if (!click_id || !ip || !unique_id) {
    return res.status(400).json({
      success: false,
      message: "Missing parameters"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Postback received"
  });
}
