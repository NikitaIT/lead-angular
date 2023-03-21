import {
  Component,
  ElementRef,
  inject,
  Injectable,
  OnInit,
} from '@angular/core';
import { Injector } from '@angular/core';
import {
  PropsWithChildren,
  createContext,
  useContext,
  createElement,
} from 'react';
import { createRoot, Root } from 'react-dom/client';

const InjectorCtx = createContext<Injector | null>(null);

export function NgContext(props: PropsWithChildren<{ injector: Injector }>) {
  return createElement(InjectorCtx.Provider, {
    children: props.children,
    value: props.injector,
  });
}
@Injectable({ providedIn: 'root' })
export class NgReact {
  injector = inject(Injector);

  createRoot(host: HTMLElement) {
    return createRoot(host);
  }

  render<Comp extends React.ElementType>(
    root: Root,
    Comp: Comp,
    compProps?: React.ComponentProps<Comp>
  ) {
    root.render(
      createElement(
        NgContext,
        {
          injector: this.injector,
        },
        createElement(Comp, compProps)
      )
    );
  }
}

function useInjector(): Injector {
  const injector = useContext(InjectorCtx);

  if (!injector) {
    throw new Error('Missing NgContext');
  }

  return injector;
}

@Component({
  standalone: true,
  template: ``,
  // selector: 'lead-angular-react',
  // templateUrl: './react.component.html',
  // styleUrls: ['./react.component.css'],
})
export class ReactComponent implements OnInit {
  private ngReact = inject(NgReact);
  private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);
  ngOnInit() {
    import('react-shell/Module').then((App) =>
      this.ngReact.render(this.root, App.RemoteEntryModule)
    );
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}
