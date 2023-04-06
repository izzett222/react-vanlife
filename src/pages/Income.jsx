import chart from "../assets/income.svg";

export default function Income() {
  const transactions = [
    {
      id: 1,
      amount: 720,
      date: "1/12/22",
    },
    {
      id: 2,
      amount: 560,
      date: "10/11/22",
    },
    {
      id: 3,
      amount: 980,
      date: "23/11/22",
    },
  ];
  return (
    <div className="w-full bg-[#FFF7ED] px-[26px]">
      <h2 className="font-bold text-4xl text-dark pt-14 mb-11">Income</h2>
      <p className="text-[#4d4d4d]">
        Last <span className="font-bold underline">30 days</span>
      </p>
      <h1 className="text-dark font-extrabold text-5xl mt-8 mb-14">$2,260</h1>
      <img
        src={chart}
        className="h-[350px] object-cover w-full max-w-[600px] mx-auto"
        alt=""
      />
      <div className="mt-14">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-dark text-2xl font-bold">
            Your transactions (3)
          </h3>
          <p className="text-[#4d4d4d]">
            Last <span className="font-bold underline">30 days</span>
          </p>
        </div>
        <div className="pb-8">
          {transactions.map((transaction) => {
            return (
              <div key={transaction.id} className="flex justify-between items-center py-9 px-7">
                <p className="text-4xl text-dark font-semibold">${transaction.amount}</p>
                <p className="text-[#4d4d4d] font-medium text-xl">{transaction.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
