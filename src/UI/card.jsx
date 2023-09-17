function card(props) {
  return (
    <>
      <article className={`card ${props.className}`}>{props.children}</article>
    </>
  );
}

export default card;
