import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PokemonListComponent } from './app/pokemon-List.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: PokemonListComponent },
    ])
  ],
});

