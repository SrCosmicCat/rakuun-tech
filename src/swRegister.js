if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);

        // Esperar hasta que el Service Worker esté listo
        navigator.serviceWorker.ready.then((registration) => {
          console.log('Service Worker listo para manejar las solicitudes');
        });

        // Escuchar el evento de cambio de controlador (cuando el SW se activa)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('El Service Worker ha tomado el control');
          // Aquí podrías forzar un refresco de la página si es necesario
          location.reload(); // Esto es opcional, si deseas recargar la página para que empiece a usar el SW activado
        });
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}