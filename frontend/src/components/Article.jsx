export const Article = ({ img, number, title, text }) => {
  return (
    <article className="h-[162px] flex-none flex md:pr-[54px] md:w-[343px] md:flex-grow">
      <div className="w-[100px] h-[100px] flex-none">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover"  // Asegura que la imagen cubra completamente el área y mantenga la relación de aspecto
        />
      </div>
      <div className="pl-6">
        <p className="text-gray-500 mb-[8px] text-3xl font-bold">{number}</p>
        <h2 className="font-bold mb-[8px] hover:text-SoftOrange cursor-pointer sm:text-[24px]">{title}</h2>
        <p className="text-zinc-600 text-[14px] sm:text-[14px]">{text}</p>
      </div>
    </article>
  );
}
