
const Cover = ({img, title, discription}) => {
    return (
        <div className="hero" style={{backgroundImage: `url('${img}')`}}>
       
        <div className="hero-content text-center text-neutral-content ">
          <div className=' py-24' >
          <div className="py-36 px-96 hero-overlay bg-opacity-60 ">
          <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
            <p className="mb-5">{discription}</p>
          </div>
        
          </div>
        </div>
      </div>
    );
};

export default Cover;