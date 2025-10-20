<script lang="ts">
  const { imageSrc, altText, copyrightText } = $props()
</script>

<div class="grid w-full overflow-hidden">
  <img src={imageSrc} alt={altText} class="block w-full h-auto col-start-1 row-start-1" />
  <p class="col-start-1 row-start-1 self-end text-sm text-left text-white py-1 px-1 m-1">© {copyrightText}</p>
</div>