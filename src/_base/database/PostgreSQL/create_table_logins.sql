-- SEQUENCE: public.logins_login_id_seq

-- DROP SEQUENCE public.logins_login_id_seq;

CREATE SEQUENCE public.logins_login_id_seq;

--ALTER SEQUENCE public.logins_login_id_seq
--    OWNER TO postgres;


-- Table: public.logins

-- DROP TABLE public.logins;

CREATE TABLE public.logins
(
    login_id integer NOT NULL DEFAULT nextval('logins_login_id_seq'::regclass),
    user_id integer NOT NULL,
    servicename character varying(50) COLLATE pg_catalog."default",
    serviceurl character varying(100) COLLATE pg_catalog."default",
    username character varying(50) COLLATE pg_catalog."default",
    password character varying(150) COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    created time with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    edited time with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted boolean NOT NULL DEFAULT false,
    CONSTRAINT logins_pkey PRIMARY KEY (login_id),
    CONSTRAINT "logins.user_id -> users.user_id" FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

--ALTER TABLE public.logins
--    OWNER to postgres;