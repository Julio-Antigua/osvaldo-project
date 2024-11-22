export const NewArticle = ({title, text, img}) => {
  return (
    <article className="h-[140px] mb-14 flex items-center">
      {/* Imagen al lado del texto */}
      <div className="w-[200px] h-[100px] mr-4">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div>
        <h2 className="hover:text-CustomRed cursor-pointer mb-3 font-bold text-[20px]">{title}</h2>
        <p className="text-[15px]">{text}</p>
      </div>
    </article>
  )
}
