export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
      <div class="container-sm">
        <h5>(주)조이투어</h5>
        </div>
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;Astro Ecommerce by
          <a href="https://www.creative-tim.com" className="text-secondary ms-1" target="_blank">Creative Tim</a>.
        </div>
      </footer>
    </>
  );
}


