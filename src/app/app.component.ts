import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landingPageAngular17';

  hideSidebar = false;

  constructor(private router: Router) {
    // Suscribirse solo a eventos de navegación completados
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideSidebar = this.shouldHideSidebar(event.urlAfterRedirects);
      }
    });
  }

  shouldHideSidebar(url: string): boolean {
    // Ocultar el componente para rutas específicas o patrones
    const hiddenRoutes = ['/contact'];

    // Verificar rutas dinámicas usando expresiones regulares
    const dynamicRouteRegex = /^\/categories\/[^\/]+\/[^\/]+$/;

    // Comprobar si la URL coincide con rutas exactas o dinámicas
    return hiddenRoutes.includes(url) || dynamicRouteRegex.test(url);
  }
}
