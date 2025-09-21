const sendEmail = async ({ to, subject, text }) => {
    console.log("====== Simulated Email ======");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${text}`);
    console.log("=============================");
};

export default sendEmail;
