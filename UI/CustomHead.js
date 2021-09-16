import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>Harshit Bhawsar Inc.</title>
      <link rel="icon" href="logo.jpeg" />
      <link href="http://fonts.cdnfonts.com/css/blanka" rel="stylesheet" />
      <link href="http://fonts.cdnfonts.com/css/anurati" rel="stylesheet" />
      <link
        href="http://fonts.cdnfonts.com/css/voice-in-my-head"
        rel="stylesheet"
      />
      <link href="http://fonts.cdnfonts.com/css/titan" rel="stylesheet" />

      {/* Open graph tags(how url appears when shared on social media.) */}
      <meta property="og:title" content="Harshit Bhawsar Portfolio." />
      <meta
        property="og:description"
        content="My portfolio website for curriculum vitae purposes."
      />
      <meta property="og:image" content="logo.jpeg" />
    </Head>
  );
};
export default CustomHead;
