const utag_data = {
    default_plan: "vodafone one ilimitada plus x2 600mbps",
    plans_add2cart: [{
        "product_name": "vodafone one ilimitada plus x2 600mbps",
        "product_category": "movil+fibra",
        "product_variant": "datos y minutos ilimitados+600mbps fibra optica",
        "promotion_price_name": "promo colectivos hogar ilimitable - 50% dto. 3 meses",
        "promotion_gift_name": "",
        "product_id": "268548269",
        "product_detail": "",
        "product_sale_type": "yes:transactional",
        "product_additional_lines": [{
            "product_name": "",
            "product_category": "",
            "promotion_price_name": "",
            "product_id": ""
        }],
        "product_packs_tv": [{
            "product_name": "",
            "product_category": "",
            "promotion_price_name": "",
            "promotion_gift_name": "",
            "product_id":""
        }]
    }, {
        "product_name": "vodafone one ilimitada plus x2 600mbps ilimitada total pack tv plus x2 series",
        "product_category": "movil+fibra",
        "product_variant": "datos y minutos ilimitados+600mbps fibra optica",
        "promotion_price_name": "promo colectivos hogar ilimitable - 50% dto. 3 meses",
        "promotion_gift_name": "",
        "product_id": "268548269",
        "product_detail": "",
        "product_sale_type": "yes:transactional",
        "product_packs_tv": [{
            "product_name": "",
            "product_category": "",
            "promotion_price_name": "",
            "promotion_gift_name": "",
            "product_id": ""
        }]
    }]
}

window.utag_data = {
    ...window.utag_data,
    ...utag_data
}

export default utag_data
