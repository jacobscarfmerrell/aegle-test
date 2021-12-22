import WrappedHead from 'next/head';

export default function Head() {
  return (
    <WrappedHead>
      <title>Aegle Health</title>
      <link
        rel="preload"
        href="/fonts/Rufina/Rufina-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rufina/Rufina-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Rufina/Lato-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Lato/Lato-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link rel="icon" href="/favicon.ico" />
    </WrappedHead>
  );
}
