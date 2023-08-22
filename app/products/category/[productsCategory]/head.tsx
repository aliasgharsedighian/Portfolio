interface pageProps {
  params: {
    productsCategory: string;
  };
}

export default function Head({ params: { productsCategory } }: pageProps) {
  const categoryHead = productsCategory.replace("%20", " ");
  return (
    <>
      <title>{categoryHead}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
