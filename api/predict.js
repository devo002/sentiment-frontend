export default async function handler(req, res) {

  const response = await fetch(
    "http://sentiment-alb-757626889.eu-west-1.elb.amazonaws.com/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}