import { CLIENT_COMPANIES } from '../types/clients'
import './Clients.css'

export function Clients() {
  return (
    <section
      id="clients"
      className="section clients"
      aria-labelledby="clients-heading"
    >
      <div className="container clients__layout">
        <div className="clients__intro">
          <span className="clients__orb" aria-hidden="true" />
          <span className="section-label">Clients</span>
          <h2 id="clients-heading" className="section-title clients__title">
            <svg className="clients__title-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3.4"
                y="3.4"
                width="7.2"
                height="7.2"
                rx="0.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="13.4"
                y="3.4"
                width="7.2"
                height="7.2"
                rx="0.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="3.4"
                y="13.4"
                width="7.2"
                height="7.2"
                rx="0.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="13.4"
                y="13.4"
                width="7.2"
                height="7.2"
                rx="0.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            導入実績企業
          </h2>
        </div>

        <ul className="clients__list">
          {CLIENT_COMPANIES.map((client, index) => {
            const isEmpty = !client.name && !client.logoSrc

            return (
              <li
                key={client.name || `client-${index}`}
                className={`clients__item${isEmpty ? ' clients__item--empty' : ''}`}
              >
                {isEmpty ? (
                  <span aria-hidden="true" />
                ) : client.href ? (
                  <a href={client.href} target="_blank" rel="noreferrer">
                    {client.logoSrc ? (
                      <img src={client.logoSrc} alt={client.name ?? ''} />
                    ) : (
                      <span>{client.name}</span>
                    )}
                  </a>
                ) : client.logoSrc ? (
                  <img src={client.logoSrc} alt={client.name ?? ''} />
                ) : (
                  <span>{client.name}</span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
