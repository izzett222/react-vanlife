import reviews from "../assets/review.svg";

export default function Reviews() {
  const reviewItems = [
    {
      id: 1,
      name: "Elliot",
      date: "December 1, 2022",
      description:
        "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      name: "Sandy",
      date: "November 23, 2022",
      description:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];
  return (
    <div className="w-full bg-[#FFF7ED] px-[26px] pb-14">
      <div className="flex gap-5 items-baseline">
        <h2 className="font-bold text-4xl mt-5 text-dark mb-11">
          Your reviews
        </h2>
        <p className="text-[#4d4d4d]">
          Last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <img src={reviews} className="mb-10" alt="" />
      <div>
        <h5 className="text-lg text-dark font-bold mb-5">Reviews (2)</h5>
        <div>
          {reviewItems.map((review) => {
            return (
              <div key={review.id} className="pb-6 border-b-2 mb-8 border-b-[#C7C7C7]">
                <div className="flex mb-3">
                  <h6 className="text-dark font-semibold">{review.name} </h6>
                  <p className="text-[#8c8c8c]">{review.date}</p>
                </div>
                <p className="text-dark">{review.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
