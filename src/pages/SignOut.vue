<script setup>
import { useUserStore } from '@/features/User'

const userStore = useUserStore()

userStore.resetUser()
window.location = '/'
</script>
