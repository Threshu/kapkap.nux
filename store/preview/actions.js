import { $axios } from '~/utils/api'

export const fetchCartPreviews = async ({ commit, cart }) => {
  try {
    const { data: { backImageUrl, frontImageUrl } } = await getProductPreview({
      product: cartItem,
      previewId: cartItem.previewId,
      setName: cartItem.setName,
    });
    dispatch(setProductPreview(cartItem.id, [frontImageUrl, backImageUrl]));
    if (items.length > 0) return dispatch(fetchCartPreviews(items));
  } catch (err) {
    onServerConnectionError(dispatch, get(err, 'response.data', {}), FETCH_CART_PREVIEWS);
  }
}
