import { memo, type FC, type ReactNode } from "react";
import { RankingWrapper } from "./style";
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCurrentSongAction } from "../player/store/player";

interface IProps {
    children?: ReactNode
}

const RankingList: FC<IProps> = () => {
    const dispatch = useAppDispatch()
    const { soarRanking, newRanking, originalRanking } = useAppSelector((state) => ({
        soarRanking: state.recommend.soarRanking,
        newRanking: state.recommend.newRanking,
        originalRanking: state.recommend.originalRanking,
    }), shallowEqual);

    const handlePlaySong = (id: number, list: any[]) => {
        dispatch(fetchCurrentSongAction({ id, playSongList: list }))
    }

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
                                <a href="" className="play sprite_02" onClick={(e) => {
                                    e.preventDefault()
                                    if (soarRanking.length) handlePlaySong(soarRanking[0].id, soarRanking)
                                }}>
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
                                                <div className="name" onClick={() => handlePlaySong(item.id, soarRanking)}>{item.name}</div>
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
                                <a href="" className="play sprite_02" onClick={(e) => {
                                    e.preventDefault()
                                    if (newRanking.length) handlePlaySong(newRanking[0].id, newRanking)
                                }}>
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
                                                <div className="name" onClick={() => handlePlaySong(item.id, newRanking)}>{item.name}</div>
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
                                <a href="" className="play sprite_02" onClick={(e) => {
                                    e.preventDefault()
                                    if (originalRanking.length) handlePlaySong(originalRanking[0].id, originalRanking)
                                }}>
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
                                                <div className="name" onClick={() => handlePlaySong(item.id, originalRanking)}>{item.name}</div>
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
