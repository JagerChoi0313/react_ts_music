import hyRequest from '@/service'

export function getBanners() {
    return hyRequest.get({
        url: '/banner'
    })
}

export function getHotRecommend(limit = 30) {
    return hyRequest.get({
        url: '/personalized',
        params: {
            limit
        }
    })
}

export function getNewAlbum() {
    return hyRequest.get({
        url: '/album/newest'
    })
}

export function getSoarRanking() {
    return hyRequest.get({
        url: '/playlist/detail',
        params: {
            id: 19723756
        }
    })
}
export function getNewRanking() {
    return hyRequest.get({
        url: '/playlist/detail',
        params: {
            id: 3779629
        }
    })
}
export function getOriginalRanking() {
    return hyRequest.get({
        url: '/playlist/detail',
        params: {
            id: 2884035
        }
    })
}
