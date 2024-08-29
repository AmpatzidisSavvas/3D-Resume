export const Section = (props) => {

    return (
      <section
        className={`h-screen flex flex-col justify-center p-10 ${
          props.right ? "items-end" : "items-start"
        }`}
      >
        <div className="w-1/2 flex items-center justify-center min-h-screen">
          <div className="max-w-sm w-full">
            <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl px-8 py-12 shadow-xl border border-gray-200 border-opacity-40">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    );
}