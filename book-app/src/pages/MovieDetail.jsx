import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetail = () => {
  return (
    <div className="relative">
      <img
        className="absolute inset-0 w-[100%] brightness-[0.2]"
        src="https://simg.zalopay.com.vn/zlp-website/assets/nhung_bo_phim_hoat_hinh_gan_lien_voi_tuoi_tho_Doraemon_Chu_Meo_May_Den_Tu_Tuong_Lai_e2b492da7d.jpg"
      ></img>
      <div className="relative mx-auto flex max-w-screen-lg px-8 py-6 text-white">
        <div className="flex-1">
          <img src="https://simg.zalopay.com.vn/zlp-website/assets/nhung_bo_phim_hoat_hinh_gan_lien_voi_tuoi_tho_Doraemon_Chu_Meo_May_Den_Tu_Tuong_Lai_e2b492da7d.jpg"></img>
        </div>
        <div className="flex-[2] px-6 py-4">
          <p>Test</p>
          <div className="flex items-center gap-4">
            <span className="border-spacing-y-20 border px-3 py-6">G</span>
            <p>2024/04/29</p>
            <p>ABC xyz</p>
          </div>
          <div className="mt-3 flex gap-6">
            <div className="flex gap-4">
              <p>69</p>
              <p>Rating</p>
            </div>
            <button>
              <FontAwesomeIcon className="mr-2" icon={faPlay}></FontAwesomeIcon>
              Trailer
            </button>
          </div>
          <div className="mb-4">
            <p className="font-bold">Overview</p>
            <p>Loẻm te, te te te, oh te te te</p>
          </div>
          <div className="flex gap-6">
            <div>
              <p>Director</p>
              <p>Jennier Phang</p>
            </div>
            <div>
              <p>Writter </p>
              <p>Dan Frey, Russell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
