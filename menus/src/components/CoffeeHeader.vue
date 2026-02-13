<template>
    <div>
        <div class="nv-navbar">
            <ul class="nav">
                <li><router-link :to="{ name: 'coffees' }">Coffees</router-link></li>
                <li><router-link :to="{ name: 'menus' }">Menus</router-link></li>
                <li><router-link :to="{ name: 'login' }">Login</router-link></li>
            </ul>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    // Options API
}
</script>

<style scoped>
/* ===== Coffee Pill Navbar ===== */
.nv-navbar {
  background: linear-gradient(90deg, #4e342e, #6f4e37);
  width: fit-content;            /* ไม่เต็มจอ */
  margin: 16px auto;             /* จัดกลาง */
  padding: 8px 12px;
  border-radius: 999px;          /* ✅ โค้งแบบปุ่ม */
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 12px;
  z-index: 1000;
}

/* Nav list */
.nv-navbar .nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Nav item */
.nv-navbar .nav li {
  margin: 0;
}

/* Link (ปุ่มเมนู) */
.nv-navbar .nav li a {
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  color: #f5f1ee;
  font-weight: 600;
  letter-spacing: 0.4px;
  border-radius: 999px;          /* โค้งปุ่ม */
  transition: all 0.25s ease;
}

/* Hover */
.nv-navbar .nav li a:hover {
  background-color: rgba(255, 255, 255, 0.18);
  color: #fff;
}

/* Active route (ปุ่มที่เลือก) */
.nv-navbar .nav li a.router-link-active {
  background-color: #d7b899;     /* latte */
  color: #3e2723;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
}

/* ไม่ต้องใช้ clearfix แล้ว */
.clearfix {
  display: none;
}

/* Responsive */
@media (max-width: 600px) {
  .nv-navbar {
    padding: 6px 10px;
  }

  .nv-navbar .nav li a {
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style>

