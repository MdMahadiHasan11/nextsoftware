const LoadingSpinner: React.FC = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="loader border-t-4 border-blue-500 w-8 h-8 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  