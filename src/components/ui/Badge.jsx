function Badge({ children, className = "" }) {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ${className}`}
      >
        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
  
        {children}
      </div>
    );
  }
  
  export default Badge;