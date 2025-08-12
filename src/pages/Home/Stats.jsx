import React from 'react';
import CountUp from 'react-countup';
import { MdOutlineQuestionAnswer, MdInsights } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Card = ({ Icon, count, label }) => (
    <div
        className="
      rounded-2xl text-center py-10 px-8 shadow-md
      bg-base-100
      dark:bg-base-200/60 dark:border dark:border-base-300/30 dark:shadow-black/20
    "
    >
        {/* icon */}
        <Icon
            size={40}
            className="mx-auto text-[#311b72] dark:text-primary"
        />

        {/* number */}
        <p className="my-2 text-5xl font-extrabold text-[#180d38] dark:text-base-content">
            <CountUp end={count} duration={5} />+
        </p>

        {/* label */}
        <p className="text-xl font-medium text-[#311b72] dark:text-base-content/70">
            {label}
        </p>
    </div>
);

const Stats = () => {
    return (
        <div className="mt-16">
            {/* heading */}
            <div className="flex justify-center items-center gap-2 mb-10">
                <MdInsights size={40} className="text-[#180d38] dark:text-primary" />
                <h2 className="text-4xl font-bold text-[#180d38] dark:text-base-content">
                    Platform Insights
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                    Icon={MdOutlineQuestionAnswer}
                    count={156}
                    label="Total Product Queries"
                />
                <Card
                    Icon={FaRegComments}
                    count={245}
                    label="Total Recommendations"
                />
                <Card
                    Icon={AiOutlineUsergroupAdd}
                    count={102}
                    label="Active Users"
                />
            </div>
        </div>
    );
};

export default Stats;
