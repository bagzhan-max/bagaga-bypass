
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { user_id, status } = req.body || {};

  if (!user_id || status !== "completed") {
    return res.status(400).json({
      success: false,
      message: "Task not verified"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Postback received"
  });
}
