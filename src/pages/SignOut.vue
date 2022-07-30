<script setup>
import { useUsersStore } from '@/features/users'

const userStore = useUsersStore()

userStore.resetUser()
window.location = '/welcome'
</script>
