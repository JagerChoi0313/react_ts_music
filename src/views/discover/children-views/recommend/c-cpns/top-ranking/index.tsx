import { memo, type FC, type ReactNode } from "react";
import { RankingWrapper } from "./style";
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqual } from "react-redux";
import { useAppSelector } from "@/store";

interface IProps {
    children?: ReactNode
}

const RankingList: FC<IProps> = () => {
    const { soarRanking, newRanking, originalRanking } = useAppSelector((state) => ({
        soarRanking: state.recommend.soarRanking,
        newRanking: state.recommend.newRanking,
        originalRanking: state.recommend.originalRanking,
    }), shallowEqual);

    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" moreText="更多"></AreaHeaderV1>
            <div className="box">
                <div className="add">
                    <div className="top">
                        <div className="left">
                            <div className="img"></div>
                            <div className="mask sprite_mask"></div>
                        </div>
                        <div className="right">
                            <a href="" title="飙升榜">
                                <h3>飙升榜</h3>
                            </a>
                            <div className="icon">
                                <a href="" className="play sprite_02">
                                </a>
                                <a href="" className="collect sprite_02">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <ol>
                            {
                                soarRanking.map((item: any, index: number) => {
                                    return (
                                        <li key={item.id}>
                                            <span>{index + 1}</span>
                                            <div className="info">
                                                <div className="name">{item.name}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className="new">
                    <div className="top">
                        <div className="left">
                            <div className="img"></div>
                            <div className="mask sprite_mask"></div>
                        </div>
                        <div className="right">
                            <a href="" title="新歌榜">
                                <h3>新歌榜</h3>
                            </a>
                            <div className="icon">
                                <a href="" className="play sprite_02">
                                </a>
                                <a href="" className="collect sprite_02">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <ol>
                            {
                                newRanking.map((item: any, index: number) => {
                                    return (
                                        <li key={item.id}>
                                            <span>{index + 1}</span>
                                            <div className="info">
                                                <div className="name">{item.name}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className="original">
                    <div className="top">
                        <div className="left">
                            <div className="img"></div>
                            <div className="mask sprite_mask"></div>
                        </div>
                        <div className="right">
                            <a href="" title="原创榜">
                                <h3>原创榜</h3>
                            </a>
                            <div className="icon">
                                <a href="" className="play sprite_02">
                                </a>
                                <a href="" className="collect sprite_02">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <ol>
                            {
                                originalRanking.map((item: any, index: number) => {
                                    return (
                                        <li key={item.id}>
                                            <span>{index + 1}</span>
                                            <div className="info">
                                                <div className="name">{item.name}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </RankingWrapper>
    );
}
export default memo(RankingList);
