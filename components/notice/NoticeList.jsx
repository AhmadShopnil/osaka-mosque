"use client"
import Pagination from "@/components/shared/Pagination";
import Link from "next/link";
import { useState } from "react";


export default function NoticeList({ notices }) {
    const [currentPage, setCurrentPage] = useState(1);
    const noticesPerPage = 6;

    const totalPages = Math.ceil(notices.length / noticesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * noticesPerPage;
    const paginatednotices = notices.slice(startIndex, startIndex + noticesPerPage);


    return (
        <div className="bg-white pt-10 px-4">
            <div className="space-y-6 container mx-auto px-2 lg:px-8">
                {paginatednotices?.map((item, idx) => (
                    <div key={idx} className="p-6 border border-gray-200 rounded-md shadow-sm">
                        <Link href={`/notice/${item?.slug}`}>
                        <p className="text-lg italic text-gray-800 mb-2">“{item?.name}”</p>
                        <p className="text-sm text-gray-500">{item?.sub_title}</p>
                    </Link>
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
