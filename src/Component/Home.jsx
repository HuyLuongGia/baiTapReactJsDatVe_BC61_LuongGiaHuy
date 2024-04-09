import DanhSachGhe from "./DanhSachGhe";
import GheBanChon from "./GheBanChon";
import "./style.scss";
const Home = () => {
    return (
        <div className="imgContainer">
            <div className="container mx-auto relative">
                <div className="text-center font-extrabold text-5xl py-6 text-yellow-500 ">
                    Đặt vé xem phim
                </div>
                {/* Danh Sách Ghế */}
                <DanhSachGhe />
                {/* Ghế bạn chọn */}
                <GheBanChon />
            </div>
        </div>
    );
};

export default Home;
