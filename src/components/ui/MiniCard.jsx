function MiniCard({ image, title }) {
    return (
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
  
        <img
          src={image}
          alt={title}
          className="h-16 w-full object-cover"
        />
  
        <div className="p-2">
  
          <p className="text-center text-xs font-medium text-neutral-700">
            {title}
          </p>
  
        </div>
  
      </div>
    );
  }
  
  export default MiniCard;