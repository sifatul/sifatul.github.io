const Image = (props) => {
  const { src, alt, className } = props
  return <img
    className={className}
    src={src}
    alt={alt}
    onError={(e) => { e.target.src = 'https://img.icons8.com/pastel-glyph/64/000000/page-not-found--v2.png' }} />
}
export default Image