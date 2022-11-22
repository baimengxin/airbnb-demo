import hyRequest from "..";

// 佛山高性价比房源
export function getHomeGoodPriceData() {
    return hyRequest.get({
        url: '/home/goodprice'
    })
}

// 佛山高分好评房源
export function getHomeHighScoreData() {
    return hyRequest.get({
        url: '/home/highscore'
    })
}

export function getHomeDiscountData() {
    return hyRequest.get({
        url: '/home/discount'
    })
}

export function getHomeHotRecommendData() {
    return hyRequest.get({
        url: '/home/hotrecommenddest'
    })
}

export function getHomeLongforData() {
    return hyRequest.get({
        url: '/home/longfor'
    })
}

export function getHomePlusData() {
    return hyRequest.get({
      url: '/home/plus'
    })
  }