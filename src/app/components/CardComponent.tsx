interface CardProps {
  title: string;
  characteristics: string;
  secondCharacteristics: string;
  characteristicsContent: string;
  secondCharacteristicsContent: string;
  thirdCharacteristics?: string;
  thirdCharacteristicsContent?: string;
}
const CardComponents: React.FC<CardProps> = ({
  title,
  characteristics,
  secondCharacteristics,
  characteristicsContent,
  secondCharacteristicsContent,
  thirdCharacteristics,
  thirdCharacteristicsContent,
}) => {
  return (
    <div className="card card-compact w-96 max-xl:w-72 bg-base-100 shadow-xl border border-solid border-white">
      <figure>{/* <img src={img} alt="Shoes" /> */}</figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {characteristics} : {characteristicsContent}
        </p>
        <p>
          {secondCharacteristics} : {secondCharacteristicsContent}
        </p>
        <p>
          {thirdCharacteristics} : {thirdCharacteristicsContent}
        </p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">More Info</button>
        </div> */}
      </div>
    </div>
  );
};

// обитатели и достопримечательности

export default CardComponents;
