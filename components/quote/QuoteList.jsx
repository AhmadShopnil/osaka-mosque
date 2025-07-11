"use client"
import Pagination from "@/components/shared/Pagination";
import { useState } from "react";


export default function QuoteList({ quotes }) {
    const [currentPage, setCurrentPage] = useState(1);
    const quotesPerPage = 6;

    const totalPages = Math.ceil(quotes.length / quotesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * quotesPerPage;
    const paginatedQuotes = quotes.slice(startIndex, startIndex + quotesPerPage);


    return (
        <div className="bg-white pt-10 px-4">
            <div className="space-y-6 container mx-auto px-2 lg:px-8">
                {paginatedQuotes?.map((item, idx) => (
                    <div key={idx} className="p-6 border border-gray-200 rounded-md shadow-sm">
                        <p className="text-lg italic text-gray-800 mb-2">“{item?.name}”</p>
                        <p className="text-sm text-gray-500">{item?.sub_title}</p>
                    </div>
                ))}

            </div>
            {/* ✅ Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>

    );
}
