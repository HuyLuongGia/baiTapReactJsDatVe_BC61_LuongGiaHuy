import { useSelector } from "react-redux";

const GheBanChon = () => {
    const { dataGheChon } = useSelector((state) => {
        return state.gheNgoi;
    });
    // console.log(dataGheChon);
    for (let val of dataGheChon) {
        console.log(val);
    }
    return (
        <div className="mt-7 ">
            <h2 className=" text-5xl text-white mb-4">
                Danh sách ghế bạn chọn
            </h2>
            <div className="flex items-center">
                <div className="w-7 h-7 bg-orange-600 rounded-md border-yellow-500"></div>
                <p className="text-white ml-2">Ghế đã đặt</p>
            </div>
            <div className="flex items-center my-2">
                <div className="w-7 h-7 bg-green-600 rounded-md border-yellow-500"></div>
                <p className="text-white ml-2">Ghế đang chọn</p>
            </div>
            <div className="flex items-center">
                <div className="w-7 h-7 bg-white rounded-md border-yellow-500"></div>
                <p className="text-white ml-2">Ghế chưa đặt</p>
            </div>

            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-500  ">
                    <thead className="text-xs text-white uppercase border border-gray-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Số Ghế
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giá
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hủy
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border border-gray-500 ">
                        {dataGheChon.map((item, index) => {
                            return (
                                <tr className="border-b" key={index}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-white whitespace-nowrap "
                                    >
                                        {item.soGhe}
                                    </th>
                                    <td className="px-6 py-4 text-white">
                                        {item.gia}
                                    </td>
                                    <td className="px-6 py-4 text-white">x</td>
                                </tr>
                            );
                        })}

                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GheBanChon;
