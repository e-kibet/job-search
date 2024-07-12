"use client"
import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Company", "Job Title", "Job URL", "Location", "PostedTime", "Remote"];

const DefaultTable = () => {
    const [data, setData] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [filteredList, setFilterList] = useState([])

    const handleInputChange = (event) => {
        const stringFilter = event.target.value
        if (stringFilter !== "") {
            let dataSetFiltered = data.filter(job => job.job_title.toLowerCase().includes(stringFilter.toLowerCase()));
            setFilterList(dataSetFiltered)
        } else {
            setFilterList(data)
        }
        setFilterValue(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/search-jobs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.data);
                setFilterList(jsonData.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="w-full">
            <div className="z-10 w-full bg-slate-100 p-3 items-center justify-between font-mono text-sm lg:flex">
                <div>
                    <div className="text-2xl">Search Job</div>
                    <div className="mt-2">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer">
                            Design and developed By{" "}
                            Evans
                        </a>
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <input type="text" value={filterValue} onChange={handleInputChange} name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Filter by Job Title" />
                </div>
            </div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map(({ company, job_title, job_url, location, posted_time, remote }, index) => {
                            const isLast = index === filteredList.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={company}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {company}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {job_title}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {job_url}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {location}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {posted_time}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {remote}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default DefaultTable