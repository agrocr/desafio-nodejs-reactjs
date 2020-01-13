/* Script de criação da tabela pessoa */

CREATE TABLE public.pessoa
(
    id_pessoa bigint NOT NULL DEFAULT nextval('pessoa_id_pessoa_seq'::regclass),
    cpf character varying(11) COLLATE pg_catalog."default" NOT NULL,
    nome character varying COLLATE pg_catalog."default",
    idade integer,
    sexo character(1) COLLATE pg_catalog."default",
    telefone character varying(11) COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    status boolean NOT NULL,
    CONSTRAINT pessoa_pkey PRIMARY KEY (id_pessoa),
    CONSTRAINT cpf_unique UNIQUE (cpf),
	CONSTRAINT email_unique UNIQUE (email)

)

TABLESPACE pg_default;

ALTER TABLE public.pessoa
    OWNER to postgres;