import { useAppSelector } from "@/store";
import { memo, useRef, useState, type FC, type ReactNode } from "react";
import { shallowEqual } from "react-redux";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from "antd";

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
    const [current, setCurrent] = useState(0);
    const { banners } = useAppSelector((state) => ({
        banners: state.recommend.banners,
    }), shallowEqual);

    const carouselRef = useRef<any>(null);

    const handlePrevClick = () => {
        carouselRef.current?.prev();
    };

    const handleNextClick = () => {
        carouselRef.current?.next();
    };

    // 处理红点点击事件
    const handleDotClick = (index: number) => {
        setCurrent(index);
        carouselRef.current?.goTo(index);
    };

    // 使用beforeChange回调，在轮播开始切换前更新状态
    const handleBeforeChange = (from: number, to: number) => {
        setCurrent(to);
    };

    // 直接使用current状态，不再访问ref
    let bgImgUrl = banners[current]?.imageUrl;
    if (bgImgUrl) {
        bgImgUrl = bgImgUrl + '?imageView&blur=40x20';
    }

    return (
        <BannerWrapper style={{ background: `url(${bgImgUrl}) center center / 6000px` }}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel
                        autoplay
                        ref={carouselRef}
                        effect="fade"
                        beforeChange={handleBeforeChange} // 使用beforeChange替代afterChange
                        dots={false}
                    >
                        {
                            banners.map((item: { imageUrl: string, targetUrl: string }) => {
                                return (
                                    <div key={item.targetUrl} className="banner-item">
                                        <img src={item.imageUrl} alt="" className="img" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <ul className="dots">
                        {banners.map((item: { imageUrl: string, targetUrl: string }, index: number) => {
                            return (
                                <li key={item.imageUrl} onClick={() => handleDotClick(index)}>
                                    <span className={current === index ? 'active item' : 'item'}></span>
                                </li>
                            )
                        })}
                    </ul>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={handlePrevClick}></button>
                    <button className="btn right" onClick={handleNextClick}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    );
};

export default memo(TopBanner);
