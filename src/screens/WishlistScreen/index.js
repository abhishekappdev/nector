import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'

const WishlistScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  // Fetch helper
  const fetchProducts = async (signal) => {
    try {
      setError(null)
      if (!refreshing) setLoading(true)

      const res = await fetch('https://dummyjson.com/products', { signal })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const json = await res.json()
      setProducts(Array.isArray(json.products) ? json.products : [])
    } catch (err) {
      if (err.name === 'AbortError') return
      console.warn('Fetch error:', err)
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchProducts(controller.signal)
    return () => controller.abort()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    fetchProducts()
  }

  // small helper to show star rating as text
  const stars = (rating) => {
    const full = Math.floor(rating)
    const half = rating - full >= 0.5
    return '★'.repeat(full) + (half ? '½' : '')
  }

  // calculate discounted price
  const discountedPrice = (price, discount) => {
    if (!discount) return price
    return (price * (1 - discount / 100)).toFixed(2)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.detail}>
        <View style={styles.rowBetween}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.priceMain}>${discountedPrice(item.price, item.discountPercentage)}</Text>
          {item.discountPercentage ? (
            <Text style={styles.priceOld}>${item.price.toFixed(2)}</Text>
          ) : null}
          {item.discountPercentage ? (
            <View style={styles.discountChip}>
              <Text style={styles.discountText}>-{Math.round(item.discountPercentage)}%</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.metaRow}>
          <Text style={styles.rating}>{stars(item.rating)}  <Text style={styles.metaSmall}>({item.rating.toFixed(1)})</Text></Text>
          <Text style={styles.metaSmall}>• {item.stock} in stock</Text>
        </View>

        <View style={styles.tagsRow}>
          {item.tags?.slice(0, 3).map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.sku}>SKU: {item.sku}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Wishlist</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>Error: {error}</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={products.length === 0 && styles.center}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          ListEmptyComponent={<Text>No items found.</Text>}
        />
      )}
    </SafeAreaView>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fb',
    padding: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  detail: {
    flex: 1,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#eef7ff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0077cc',
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: '#555',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  priceMain: {
    fontSize: 16,
    fontWeight: '800',
    marginRight: 8,
  },
  priceOld: {
    fontSize: 13,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountChip: {
    backgroundColor: '#ffefef',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  discountText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#c42b2b',
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  rating: {
    fontSize: 13,
    color: '#444',
  },
  metaSmall: {
    fontSize: 12,
    color: '#777',
  },
  tagsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#2b4dc4',
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  brand: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  sku: {
    fontSize: 11,
    color: '#777',
  },
  error: {
    color: 'red',
  },
})