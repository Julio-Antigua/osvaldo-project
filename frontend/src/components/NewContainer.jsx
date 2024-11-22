import { NewArticle } from "./NewArticle";

import img1 from '../assets/images/payaso.png'; // Importa las imágenes que quieras usar
import img2 from '../assets/images/stop.png';
import img3 from '../assets/images/drugs.jpg';

export const NewContainer = () => {
  return (
    <aside className="bg-SoftOrange text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:h-[660px] md:w-[350px] md:mb-0">
      <h1 className="text-CustomRed text-4xl font-bold mb-10">New Products</h1>

      <NewArticle
        title="Looking for something you shouldn’t?"
        text="Ready to cross the line? No judgments here, only results. Find what others hide—unique experiences, discreet connections, and more."
        img={img1}  // Pasa la imagen correspondiente
      />

      <NewArticle
        title="Looking for discreet services?"
        text="From the common to the unthinkable. We don’t ask questions, we deliver. Hacking, documents, contacts, quick solutions… we have it all."
        img={img2}  // Pasa la imagen correspondiente
      />

      <NewArticle
        title="Weapons?"
        text="Access what you won’t find elsewhere. From discreet tools to advanced gear, it’s all within reach if you know how to ask."
        img={img3}  // Pasa la imagen correspondiente
      />
    </aside>
  );
};
