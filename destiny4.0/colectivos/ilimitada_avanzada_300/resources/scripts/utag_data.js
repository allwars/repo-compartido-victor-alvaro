const utag_data = {
    default_plan: "vodafone one ilimitada avanzada 300Mbps",
    plans_add2cart: [{ "product_name": "vodafone one ilimitada avanzada 300mbps", "product_category": "movil+fibra", "product_variant": "datos y minutos ilimitados+300mbps fibra", "promotion_price_name": "promo colectivos + promo 50% one ilimitada avanzada 300mbps", "promotion_gift_name": "", "product_id": "168446368", "product_detail": "", "product_sale_type": "yes:transactional", "product_additional_lines": [{ "product_name": "tarifa movil ilimitada esencial", "product_category": "movil", "promotion_price_name": "datos ilimitados", "product_id": "" }], "product_packs_tv": [{ "product_name": "pack universal", "product_category": "tv", "promotion_price_name": "universal gratis", "promotion_gift_name": "", "product_id":"268547964"}]},{"product_name": "vodafone one ilimitada avanzada 300mbps","product_category": "movil+fibra","product_variant": "datos y minutos ilimitados+300mbps fibra","promotion_price_name": "promo colectivos + promo 50% one ilimitada avanzada 300mbps","promotion_gift_name": "","product_id": "168446368","product_detail": "","product_sale_type": "yes:transactional","product_packs_tv": [{"product_name": "pack universal","product_category": "tv","promotion_price_name": "universal gratis","promotion_gift_name": "","product_id": "268547964"}]}]
}

window.utag_data = {
    ...window.utag_data,
    ...utag_data
}

export default utag_data
